const mainContainer = document.getElementById('mainContainer');
const sideContainer = document.getElementById('sideContainer');
const evtButton = document.getElementById('evtButton');

var sideDeployed = false;

const datePicker = new mdDateTimePicker.default({
  type: 'date',
  future: moment().add(21, 'years')
});

const timePicker = new mdDateTimePicker.default({
  type: 'time',
  mode: true
});

evtButton.addEventListener('click', () => {
  if (!sideManager.deployed) {
    sideManager.setContent('create', templates.createEvent());
  }
  sideManager.toggle();
});

const templates = {
  createEvent() {
    return `
    <h1>Create an event</h1>
    <form onSubmit='return false;'>
        <input type='text' id='creator' name='creator'/>
        <label for='creator' class='labelInput'>
          <i class='icon ion-android-person'></i>
          Your public name
        </label><br/>

        <input type='email' id='email' name='email'/>
        <label for='email' class='labelInput'>
          <i class='icon ion-android-mail'></i>
          Your email address (will be private)
        </label><br/><br/>

        <input type='text' id='name' name='name'/>
        <label for='name' class='labelInput'>
          <i class='icon ion-pound'></i>
          Name of your event
        </label><br/>

        <textarea rows='4' id='description' name='description'></textarea>
        <label for='description' class='labelInput'>
          <i class='icon ion-android-more-horizontal'></i>
          Description
        </label><br/>

        <input id='place' placeholder='' type='text' name='place'></input>
        <label for='place' class='labelInput'>
          <i class='icon ion-ios-location'></i>
          Address
        </label><br/>
        <span id='selected_place'>No corresponding address found</span><br/>
        <input type='hidden' id='latitude' name='latitude'/>
        <input type='hidden' id='longitude' name='longitude'/>

        <span class='themeSpan'>
          <i id='themeIcon' class='icon ion-ios-football'></i><!--
          --><select id='theme' name='theme'>` + generateThemeSelect() + `</select>
        </span>
        <label for='theme'>
          <i class='icon ion-android-color-palette'></i>
          Theme
        </label><br/>

        <span id='dateTimeSpan'>
          <button id='select-date'>
            <i class='icon ion-android-calendar'></i>
            SELECT DATE
          </button><!--
          --><button id='select-time'>
            <i class='icon ion-ios-time-outline'></i>
            SELECT TIME
          </button>
        </span>

        <input type='hidden' id='dateInput' name='date'/>
        <input type='hidden' id='timeInput' name='time'/>
        <p>Selected date: <span id='selectedDate'></span></p>
        <input type='submit' value='SUBMIT' onClick='formManager.formSubmitManager()'/>
    </form>
    `;
  },
  setEvent(event) {
    return `<h1 style='background-color: ` + getHexFromColorName(getThemeColor(event.theme)) + `'>
      <i class='icon ` + getIcon(event.theme) + `'></i> ` + event.name + `<br/>` +
      `<span>` + event.theme + `</span>` +
      `</h1>
      <p class='eventDescSpan'>
        <i class='icon ion-android-person icon1-5x'></i> Created by ` + event.creator + `<br/>
        <i class='icon ion-ios-time-outline icon1-5x'></i> ` + event.date + ` ` + event.hour + `<br/>
        <i class='icon ion-ios-location icon1-5x'></i> ` + event.place + `<br/>
        <i class='icon ion-android-more-horizontal icon1-5x'></i> ` + event.description + `
      </p>
    `;
  }
};

pad = n => n < 10 ? '0' + n : n;

var currentDate = new Date();
var dateString = pad(currentDate.getDate()) + '/' + pad(currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
var timeString = pad(currentDate.getHours()) + ':' + pad(currentDate.getMinutes());


printDatetime = () => {
  document.getElementById('selectedDate').innerHTML = dateString + ' ' + timeString;
  document.getElementById('dateInput').value = dateString;
  document.getElementById('timeInput').value = timeString;
};

const sideManager = {
  deployed: false,
  lastDeployed: '',
  setContent(template, html) {
    sideManager.lastDeployed = template;
    sideContainer.innerHTML = html;
  },
  deploy() {
    if (!sideManager.deployed) {
      mainContainer.style.width = '60%';
      sideContainer.style.left = '60%';

      evtButton.childNodes[1].style.transform = 'rotate(45deg)';

      sideManager.deployed = true;

      if (sideManager.lastDeployed == 'create') {
        document.getElementById('select-date').addEventListener('click', () => {
          datePicker.toggle();
        });
        document.getElementById('select-time').addEventListener('click', () => {
          timePicker.toggle();
        });

        datePicker.trigger = document.getElementById('dateInput');
        document.getElementById('dateInput').addEventListener('onOk', () => {
          dateString = datePicker.time.format('DD/MM/YYYY').toString();
          printDatetime();
        });

        timePicker.trigger = document.getElementById('timeInput');
        document.getElementById('timeInput').addEventListener('onOk', () => {
          timeString = timePicker.time.format('HH:mm').toString();
          printDatetime();
        });

        document.getElementById('place').addEventListener('keyup', (e) => {
          if (!e.target.value) { return; }

          fetchService.fetchExternalUrl('GET', 'https://api.tomtom.com/search/2/search/' + encodeURI(e.target.value) + '.json?key=KFbWU7StNpQZ2CzfcvY0K2hFtoD9Q0wL', null).then(places => {
            if (!places.results.length) {
              document.getElementById('selected_place').innerHTML = 'No corresponding address found';
              document.getElementById('latitude').value = null;
              document.getElementById('longitude').value = null;
            } else {
              document.getElementById('selected_place').innerHTML = places.results[0].address.freeformAddress;
              document.getElementById('latitude').value = places.results[0].position.lat;
              document.getElementById('longitude').value = places.results[0].position.lon;
              map.setView([places.results[0].position.lat, places.results[0].position.lon], 13);
            }
          });
        });

        printDatetime();

        document.getElementById('theme').addEventListener('change', (e) => {
          document.getElementById('themeIcon').classList = 'icon ' + getIcon(e.target.value);
        });
      }
    }
  },
  hide() {
    if (sideManager.deployed) {
      mainContainer.style.width = '100%';
      sideContainer.style.left = '100%';

      evtButton.childNodes[1].style.transform = 'rotate(0deg)';

      sideManager.deployed = false;
    }
  },
  toggle() {
    if (sideManager.deployed) {
      sideManager.hide();
    } else {
      sideManager.deploy();
    }
  }
};

const formManager = {
  formSubmitManager() {
    var ids = {
      'creator': 'Your public name',
      'email': 'Your email address',
      'name': 'The name of your event',
      'description': 'The description of your event',
      'place': 'The place of your event'
    };
    var keys = Object.keys(ids);
    for (var i = 0; i < keys.length; i++) {
      if (!document.getElementById(keys[i]).value) {
        alert(ids[keys[i]] + ' must be filled !');
        return;
      }
    }

    var event = {
      name: document.getElementById('name').value,
      description: document.getElementById('description').value,
      creator: document.getElementById('creator').value,
      email: document.getElementById('email').value,
      place: document.getElementById('place').value,
      latitude: parseFloat(document.getElementById('latitude').value),
      longitude: parseFloat(document.getElementById('longitude').value),
      theme: document.getElementById('theme').value,
      color: getThemeColor(document.getElementById('theme').value),
      icon: getIcon(document.getElementById('theme').value),
      date: dateString,
      hour: timeString
    };
    eventManager.createEvent(event).then(() => {
      formManager.resetForm();
      sideManager.hide();
      eventManager.fetchEvents();
    });
    return false;
  },
  resetForm: function() {
    var ids = ['creator', 'email', 'name', 'description', 'place', 'latitude', 'longitude'];
    for (var i = 0; i < ids.length; i++) {
      document.getElementById(ids[i]).value = '';
    }
    dateString = pad(currentDate.getDate()) + '/' + pad(currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
    timeString = pad(currentDate.getHours()) + ':' + pad(currentDate.getMinutes());

    printDatetime();
  }
};