async function launchInstance() {
  try {
    const response = await fetch('http://localhost/surfr', {
      method: 'POST'
    });

    const data = await response.json();
    alert('Instance launched: ' + (data.InstanceId || 'check logs'));
  } catch (error) {
    alert('Error launching instance: ' + error.message);
  }
}

