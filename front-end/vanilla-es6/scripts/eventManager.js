var eventList = [];

var eventManager = {
  fetchEvents() {
    fetchService.fetchUrl('GET', '/events', null).then(eventManager.printEvents);
  },
  printEvents(eventList) {
    const layer = createLayer();
    eventList.events.forEach(event => {
      addPointerToLayer(event, layer);
    });
    addLayerToMap(layer);
  },
  createEvent(event) {
    return fetchService.fetchUrl('POST', '/events/create', JSON.stringify(event)).then(() => eventManager.printEvents);
  }
};

(() => {
  eventManager.fetchEvents();
})();

generateThemeSelect = () => {
  const themes = {
    Sports: ['Football', 'Tennis', 'Rugby', 'Baseball', 'Basketball', 'Walk', 'Bike', 'Nautical Sports'],
    'Go Out': ['Bar', 'Walk', 'Dance', 'Concert', 'Coffee Break', 'Restaurant', 'Shopping', 'Cinema', 'Zoo', 'Astronomy', 'Meeting', 'Chill', 'Video Game Party'],
    Travel: ['Car trip', 'Plane trip', 'Other trip', 'Camping', 'Nature Excursion'],
    Work: ['Meeting', 'Presentation', 'DIY', 'Move']
  };

  var result = '';
  Object.keys(themes).forEach(themeKey => {
    result += `<optgroup label="${themeKey}">`;
    themes[themeKey].forEach(theme => {
      result += `<option value="${themeKey} - ${theme}">${theme}</option>`;
    });
    result += '</optgroup>';
  });
  return result;
};

getIcon = theme => {
  switch (theme) {
    case 'Sports - Football':
      return 'ion-ios-football';
    case 'Sports - Tennis':
      return 'ion-ios-tennisball';
    case 'Sports - Rugby':
      return 'ion-ios-americanfootball';
    case 'Sports - Baseball':
      return 'ion-ios-baseball';
    case 'Sports - Basketball':
      return 'ion-ios-basketball';
    case 'Sports - Walk':
      return 'ion-android-walk';
    case 'Sports - Bike':
      return 'ion-android-bicycle';
    case 'Sports - Nautical Sports':
      return 'ion-help-buoy';
    case 'Go Out - Bar':
      return 'ion-android-bar';
    case 'Go Out - Walk':
      return 'ion-android-walk';
    case 'Go Out - Dance':
      return 'ion-music-note';
    case 'Go Out - Concert':
      return 'ion-mic-c';
    case 'Go Out - Coffee Break':
      return 'ion-coffee';
    case 'Go Out - Restaurant':
      return 'ion-android-restaurant';
    case 'Go Out - Shopping':
      return 'ion-tshirt';
    case 'Go Out - Cinema':
      return 'ion-ios-film';
    case 'Go Out - Zoo':
      return 'ion-ios-paw';
    case 'Go Out - Astronomy':
      return 'ion-planet';
    case 'Go Out - Meeting':
      return 'ion-ios-people';
    case 'Go Out - Chill':
      return 'ion-ios-glasses';
    case 'Go Out - Video Game Party':
      return 'ion-ios-game-controller-b';
    case 'Travel - Car trip':
      return 'ion-android-car';
    case 'Travel - Plane trip':
      return 'ion-plane';
    case 'Travel - Other trip':
      return 'ion-map';
    case 'Travel - Camping':
      return 'ion-bonfire';
    case 'Travel - Nature Excursion':
      return 'ion-leaf';
    case 'Work - Meeting':
      return 'ion-ios-people';
    case 'Work - Presentation':
      return 'ion-easel';
    case 'Work - DIY':
      return 'ion-hammer';
    case 'Work - Move':
      return 'ion-log-out';
    default:
      console.error('Icon not found for theme : ' + theme);
      return '';
  }
};

getThemeColor = theme => {
  if (theme.startsWith('Sports')) {
    return 'blue';
  }
  if (theme.startsWith('Go Out')) {
    return 'orange';
  }
  if (theme.startsWith('Travel')) {
    return 'red';
  }
  if (theme.startsWith('Work')) {
    return 'green';
  }
  return 'blue';
};

getHexFromColorName = color => {
  switch (color) {
    case 'blue':
      return '#1B75BB';
    case 'orange':
      return '#ef8e20';
    case 'red':
      return '#9f2b30';
    case 'green':
      return '#009549';
  }
};
