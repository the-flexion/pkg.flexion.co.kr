import svgtofont from 'svgtofont';
import path from 'node:path';
import fs from 'node:fs';

const inputDir = path.resolve(process.cwd(), 'pkg/scss/_icon/svg');
const outputDir = path.resolve(process.cwd(), 'pkg/scss/_icon/font');

await svgtofont({
  src: inputDir,
  dist: outputDir,
  fontName: 'icon', // font name
  css: true, // Create CSS files.
  startUnicode: 0xea01, // unicode start number
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
  website: {
    title: 'svgtofont',
    // Must be a .svg format image.
    logo: path.resolve(process.cwd(), 'svg', 'git.svg'),
    version: 1,
    meta: {
      description: 'Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.',
      keywords: 'svgtofont,TTF,EOT,WOFF,WOFF2,SVG',
    },
    description: ``,
    // Add a Github corner to your website
    // Like: https://github.com/uiwjs/react-github-corners
    corners: {
      url: 'https://github.com/jaywcjlove/svgtofont',
      width: 62, // default: 60
      height: 62, // default: 60
      bgColor: '#dc3545', // default: '#151513'
    },
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/jaywcjlove/svgtofont',
      },
      {
        title: 'Feedback',
        url: 'https://github.com/jaywcjlove/svgtofont/issues',
      },
      {
        title: 'Font Class',
        url: 'index.html',
      },
      {
        title: 'Unicode',
        url: 'unicode.html',
      },
    ],
    footerInfo: `Licensed under MIT. (Yes it's free and <a href="https://github.com/jaywcjlove/svgtofont">open-sourced</a>`,
  },
}).then(() => {
  console.log('done!');
});

// outputDir 경로에서 icon.woff2와 icon.scss를 제외한 모든 파일 삭제
function cleanOutputDir() {
  fs.readdir(outputDir, (err, files) => {
    if (err) {
      return console.error('Error while reading output directory:', err);
    }
    files.forEach((file) => {
      if (file !== 'icon.woff2' && file !== 'icon.scss') {
        fs.unlink(path.join(outputDir, file), (err) => {
          if (err) {
            console.error('Error while deleting file:', err);
          }
        });
      }
    });
    console.log('Unnecessary files deleted!');
  });
}

// cleanOutputDir();
