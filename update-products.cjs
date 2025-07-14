const fs = require('fs');
const path = require('path');
const os = require('os');

const downloadsDir = path.join(os.homedir(), 'Downloads');
const targetFile = path.join(__dirname, 'src', 'data', 'products.ts');

// 1. نجيب كل الملفات الي اسمها egymerch_products*.json
const files = fs.readdirSync(downloadsDir).filter(file =>
  file.startsWith('egymerch_products') && file.endsWith('.json')
);

if (files.length === 0) {
  console.error('❌ لم يتم العثور على ملفات تصدير المنتجات.');
  process.exit(1);
}

// 2. نجيب أحدث ملف بناءً على تاريخ التعديل
const latestFile = files
  .map(file => ({
    name: file,
    time: fs.statSync(path.join(downloadsDir, file)).mtime.getTime()
  }))
  .sort((a, b) => b.time - a.time)[0].name;

const sourcePath = path.join(downloadsDir, latestFile);

// 3. قراءة ملف الـ JSON
const jsonData = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));

// 4. توليد كود TypeScript للمنتجات
const tsContent = `// ✅ ملف تم توليده تلقائيًا من auto-update-products.js
export const products = ${JSON.stringify(jsonData, null, 2)};`;

fs.writeFileSync(targetFile, tsContent, 'utf8');

console.log(`✅ تم تحديث الملف: src/data/products.ts من ${latestFile}`);
