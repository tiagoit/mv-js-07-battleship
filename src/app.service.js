const AppService = () => {
  const message = msg => {
    document.getElementById('message').innerHTML = `<p>${msg}</p>`;
    document.getElementById('message').classList.remove('hidden');

    setTimeout(() => {
      document.getElementById('message').classList.add('hidden');
    }, 3000);
  };

  return { message };
};

export default AppService;
