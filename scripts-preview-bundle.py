import sys, os, re, json, shutil
S = sys.argv[1]
if os.path.isdir(S):
    shutil.rmtree(S)
os.makedirs(S + '/assets')
for f in os.listdir('dist/_astro'):
    if f.endswith('.woff') or 'greek' in f or 'vietnamese' in f:
        continue
    shutil.copy('dist/_astro/' + f, S + '/assets/' + f)
pages = {'en': 'index.html', 'fr': 'fr.html', 'ru': 'ru.html'}
for l, out in pages.items():
    h = open(f'dist/{l}/index.html', encoding='utf-8').read().replace('/_astro/', 'assets/')
    def rep(m):
        lang, anchor = m.group(1), m.group(2) or ''
        if lang == l:
            return f'href="{anchor or "#top"}"'
        return f'href="{pages[lang]}{anchor}"'
    h = re.sub(r'href="/(en|fr|ru)/(#[\w-]+)?"', rep, h)
    open(f'{S}/{out}', 'w', encoding='utf-8').write(h)
for f in os.listdir(S + '/assets'):
    if f.endswith(('.css', '.js')):
        p = S + '/assets/' + f
        txt = open(p, encoding='utf-8').read().replace('/_astro/', './')
        open(p, 'w', encoding='utf-8').write(txt)
allt = ''.join(open(S + '/' + x, encoding='utf-8').read() for x in pages.values())
allt += ''.join(open(S + '/assets/' + f, encoding='utf-8').read() for f in os.listdir(S + '/assets') if f.endswith(('.css', '.js')))
files = []
for f in sorted(os.listdir(S + '/assets')):
    if f.endswith('.js') or f in allt:
        files.append({'path': 'assets/' + f})
    else:
        os.remove(S + '/assets/' + f)
files += [{'path': 'fr.html'}, {'path': 'ru.html'}]
print(json.dumps(files))
