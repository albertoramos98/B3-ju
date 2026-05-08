import os
import re

files_to_update = [
    "index.html", "assentos.html", "mesa.html", "divisorias.html", "armazenamentos.html",
    "acustica.html", "cabines.html", "area-externa.html", "comerciais.html", "sobrenos.html",
    "parceiros.html", "contato2.html", "produtos.html", "politica.html", "cadeiras.html",
    "cadeiras2.html", "cadeiras3.html", "cadeiras4.html", "auditorio.html", "importadas.html",
    "multifuncionais.html", "puffs.html", "sofá.html", "clientes.html", "decor.html"
]

desktop_link = '<a href="comerciais.html"><img class="product-icon" src="https://img.icons8.com/ios/50/restaurant.png" /> Comerciais</a>'
mobile_link = '<li><a href="comerciais.html">Comerciais</a></li>'

mobile_menu_button = """                <button class="mobile-menu-icon" id="mobile-menu-button">
                    <i class="ph ph-list"></i>
                </button>"""

mobile_nav_block = """    <div class="mobile-nav" id="mobile-nav">
        <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="sobrenos.html">Sobre nós</a></li>
            <li><a href="produtos.html">Produtos</a></li>
            <li><a href="area-externa.html">Área Externa</a></li>
            <li><a href="comerciais.html">Comerciais</a></li>
            <li><a href="parceiros.html">ARD grupo</a></li>
            <li><a href="contato2.html">Contato</a></li>
            <li><a href="https://wa.me/c/558189198675" target="_blank">Solicite seu Orçamento</a></li> 
        </ul>
    </div>"""

def update_file(filepath):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Desktop Dropdown
    # Find area-externa link in dropdown
    desktop_pattern = r'(<a href="area-externa\.html">.*?</a>)'
    if 'comerciais.html' not in content or 'dropdown-menu' not in content.split('comerciais.html')[0]: # Simplified check
         # Actually let's just check if the specific link exists
         if desktop_link not in content:
             content = re.sub(desktop_pattern, r'\1\n                            ' + desktop_link, content)

    # 2. Update Mobile Nav
    if mobile_link not in content:
        mobile_nav_pattern = r'(<li><a href="area-externa\.html">Área Externa</a></li>)'
        content = re.sub(mobile_nav_pattern, r'\1\n            ' + mobile_link, content)

    # 3. Ensure mobile menu button exists
    if 'id="mobile-menu-button"' not in content:
        # Insert before </div>\n        </div>\n    </header> or similar
        header_end_pattern = r'(</a>\s*</div>\s*</header>)'
        # This is tricky because header-right might be missing
        # Let's try to find contact-button and insert after it
        if 'contact-button' in content:
             content = re.sub(r'(class="contact-button">.*?</a>)', r'\1\n                \n' + mobile_menu_button, content)

    # 4. Ensure mobile nav block exists
    if 'id="mobile-nav"' not in content:
        # Insert after </header>
        content = re.sub(r'(</header>)', r'\1\n\n' + mobile_nav_block, content)
    else:
        # If it exists, ensure it has Comerciais
        if mobile_link not in content:
             # Already handled in step 2 if the pattern matched
             pass

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filepath}")

for f in files_to_update:
    update_file(f)
