def fix_lockfile(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    cleaned = []
    skip = False

    for line in lines:
        stripped = line.strip()

        if stripped.startswith("<<<<<<<"):
            skip = True
            continue
        if stripped.startswith("======="):
            continue
        if stripped.startswith(">>>>>>>"):
            skip = False
            continue

        if not skip:
            cleaned.append(line)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(cleaned)

    print("package-lock.json cleaned")
