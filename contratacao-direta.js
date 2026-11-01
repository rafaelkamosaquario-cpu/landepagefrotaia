/* Add a second route; never replace the existing Frota IA / checkout links. */
(() => {
  const cards = [
    [document.querySelector('.price-card'), 'Individual', 1, '89,90', '899,00'],
    [document.querySelectorAll('.fleet-plans article')[0], 'Essencial', 3, '149,90', '1.499,00'],
    [document.querySelectorAll('.fleet-plans article')[1], 'Pro', 10, '249,90', '2.499,00'],
  ];
  for (const [card, name, vehicles, monthly, annual] of cards) {
    if (!card || card.querySelector('[data-direct-sale]')) continue;
    const box = document.createElement('div'); box.dataset.directSale = name;
    box.style.cssText = 'margin-top:20px;padding-top:16px;border-top:1px solid currentColor;display:grid;gap:10px';
    const title = document.createElement('strong'); title.textContent = 'Prefere contratar com atendimento?'; box.append(title);
    for (const [period, price] of [['mensal', monthly], ['anual', annual]]) {
      const a = document.createElement('a');
      a.textContent = `Contratar ${period} pelo WhatsApp`;
      a.href = `https://wa.me/5541997295836?text=${encodeURIComponent(`Olá, Rafael! Vim pela landing page do Frota IA. Quero contratar o plano ${name}, ${period}, para ${vehicles} veículo(s), por R$ ${price}. Quero pagar por Pix com seu atendimento. Meu WhatsApp de uso no Frota IA é: `)}`;
      a.target = '_blank'; a.rel = 'noopener noreferrer'; a.style.cssText = 'display:block;padding:12px;border:1px solid currentColor;border-radius:10px;text-align:center'; box.append(a);
    }
    const note = document.createElement('small'); note.textContent = 'RodoCore: (41) 99729-5836. Pix enviado pelo atendimento. Liberação após conferência do recebimento, sem renovação automática.'; box.append(note); card.append(box);
  }
})();
