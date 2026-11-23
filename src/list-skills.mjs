import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../skills/', import.meta.url);
for (const category of ['local', 'imported', 'taste']) {
  const directory = new URL(`${category}/`, root);
  if (!existsSync(directory)) continue;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && existsSync(join(directory.pathname, entry.name, 'SKILL.md'))) {
      console.log(`${category}/${entry.name}`);
    }
  }
}
