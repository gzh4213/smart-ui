import fs from "fs-extra";
import path from "path";
// 读取 vite 配置
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";

const buildAll = async () => {
  console.log('config:', config);
  
  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);

  const srcDir = path.resolve(__dirname, "../src/");
  const srcDirList = fs.readdirSync(srcDir)
  srcDirList.filter((name) => {
    // 只要目录不要文件，且里面包含index.ts
    const componentDir = path.resolve(srcDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  })
  .forEach(async (name) => {
    
    const outDir = path.resolve(config.build.outDir, name);
    const custom = {
      lib: {
        entry: path.resolve(srcDir, name),
        name, // 导出模块名
        fileName: `index`,
        formats: [`es`, `umd`],
      },
      outDir,
    };
    // console.log('aaa:', custom, config.build);

    Object.assign(config.build, custom);
    await build(defineConfig(config as UserConfig) as InlineConfig);

    fs.outputFile(
      path.resolve(outDir, `package.json`),
      `{
        "name": "gzh4213-ui/${name}",
        "main": "index.umd.js",
        "module": "index.umd.js"
      }`,
      `utf-8`
    );
  });
}

buildAll()