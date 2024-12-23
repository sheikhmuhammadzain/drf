import os
import shutil

# Create new directory structure
os.makedirs('new_backend', exist_ok=True)

# Copy manage.py from backend2/backend2 to new_backend
shutil.copy('backend2/backend2/manage.py', 'new_backend/manage.py')

# Copy backend2 app files
os.makedirs('new_backend/backend2', exist_ok=True)
for file in ['__init__.py', 'asgi.py', 'settings.py', 'urls.py', 'wsgi.py']:
    src = os.path.join('backend2/backend2/backend2', file)
    dst = os.path.join('new_backend/backend2', file)
    if os.path.exists(src):
        shutil.copy(src, dst)

# Copy myapp
shutil.copytree('backend2/myapp', 'new_backend/myapp', dirs_exist_ok=True)

# Copy database
if os.path.exists('backend2/backend2/db.sqlite3'):
    shutil.copy('backend2/backend2/db.sqlite3', 'new_backend/db.sqlite3')

print("Reorganization complete!")
