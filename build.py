import zipfile
import os

try:
    os.makedirs('dist')
except OSError as e:
    if e.errno != os.errno.EEXIST:
        raise

zf = zipfile.ZipFile('dist/extension.zip', mode='w')
print('Creating archive {}'.format(zf.filename))
files = [
  'manifest.json',
  'content.js',
  'images/icon-16.png',
  'images/icon-32.png',
  'images/icon-48.png',
  'images/icon-128.png'
]
try:
    for f in files:
        print(' adding {}'.format(f))
        zf.write(f)
finally:
    print('Finished')
    zf.close()
