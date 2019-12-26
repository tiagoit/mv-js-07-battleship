const AppService = () => {
  const message = msg => {
    document.getElementById('message').innerHTML = `<p>${msg}</p>`;
    document.getElementById('message').classList.remove('hidden');

    setTimeout(() => {
      document.getElementById('message').classList.add('hidden');
    }, 3000);
  };

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return { message, rand };
};

export default AppService;
