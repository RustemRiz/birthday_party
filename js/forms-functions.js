const showGreetings = function() {
  const greetingsEl = document.getElementById('greetings');
  greetingsEl.classList.remove('transformed');
  setTimeout(() => {
    greetingsEl.classList.add('transformed');
  }, 2500);
}

const	onClickSubmit = function(isAttending) {
    const pageSearchParams = new URLSearchParams(window.location.search);
    const side = pageSearchParams.get('side');

		const url = new URL('https://docs.google.com/forms/u/1/d/e/1FAIpQLSf5XIYQoRvA1Q7G09pn4suBcWFEXLiIhDQ3MUE3rxWwsaujcg/formResponse?usp=pp_url&submit=Submit');
    const searchParams =  url.searchParams;

		const nameEl = document.getElementById('name');
    const name = nameEl?.value;
		const phoneEl = document.getElementById('phone');
		const phone = phoneEl?.value;
    if (!name || !phone) {
      nameEl.classList.add('show-error');
      phoneEl.classList.add('show-error');
      return;
    }

    // Дизейблим кнопки
    const noBtn = document.getElementById('btn-no');
    if (noBtn) noBtn.disabled = true;
    const yesBtn = document.getElementById('btn-yes');
    if (yesBtn) yesBtn.disabled = true;

    searchParams.set('entry.1473834303', name);
    searchParams.set('entry.1731409837', phone);
    if (side) searchParams.set('entry.2017474568', side);
    searchParams.set('entry.1449929531', isAttending ? 'Да' : 'Нет');
    console.log(url);
    try {
      fetch(url)
        .finally(() => {
          showGreetings();
        })
    } catch(error) {
      console.log(error);
    }
	};

