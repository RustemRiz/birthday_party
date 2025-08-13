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

		const url = new URL('https://docs.google.com/forms/u/1/d/e/1FAIpQLSfBaEGf7rTF3KFRIsLUQNRWFqNfNR0yZnBLRklvLldtgBq6-w/formResponse?usp=pp_url&submit=Submit');
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

    searchParams.set('entry.761860465', name);
    searchParams.set('entry.1155097684', phone);
    if (side) searchParams.set('entry.1663727652', side);
    searchParams.set('entry.380884640', isAttending ? 'Да' : 'Нет');
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

