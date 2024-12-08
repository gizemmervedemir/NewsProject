
/*------------SOLUTION 1-------------

function IconButton(btnText, btnColor, iconClass) {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-' + btnColor);

  const icon = document.createElement('i');
  //icon.classList.add(iconClass);
  icon.setAttribute('class', iconClass);
  //icon.className = iconClass;

  button.textContent = btnText;

  button.prepend(icon);

  return button;
}

const buton1 = IconButton('Open', 'blue', 'fa fa-folder-open');
const buton2 = IconButton('Edit', 'orange', 'fa fa-pen');
const buton3 = IconButton('Delete', 'red', 'fa fa-trash');

const container = document.querySelector('#icon-buttons');
container.appendChild(buton1);
container.appendChild(buton2);
container.appendChild(buton3);
*/

/*---------SOLUTION 2--------------
function IconButton({ btnText, btnColor, iconClass }) {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-' + btnColor);

  const icon = document.createElement('i');
  icon.className = iconClass;

  button.textContent = btnText;
  button.prepend(icon);

  return button;
}

const buton1 = IconButton({
  btnText: 'Open',
  btnColor: 'blue',
  iconClass: 'fa fa-folder-open',
});

const buton2 = IconButton({
  btnText: 'Edit',
  btnColor: 'orange',
  iconClass: 'fa fa-pen',
});

const buton3 = IconButton({
  btnText: 'Delete',
  btnColor: 'red',
  iconClass: 'fa fa-trash',
});

const container = document.querySelector('#icon-buttons');
container.append(buton1, buton2, buton3);
*/

//------SOLUTION 3-------- Object + forEach

function IconButton({ btnText, btnColor, iconClass }) {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-' + btnColor);
  
    const icon = document.createElement('i');
    icon.className = iconClass;
  
    button.textContent = btnText;
    button.prepend(icon);
  
    return button;
  }
  
  const buttonVersions = [
    { btnText: 'Open', btnColor: 'blue', iconClass: 'fa fa-folder-open' },
    { btnText: 'Edit', btnColor: 'orange', iconClass: 'fa fa-pen' },
    { btnText: 'Delete', btnColor: 'red', iconClass: 'fa fa-trash' },
  ];
  
  const container = document.querySelector('#icon-buttons');
  
  buttonVersions.forEach((version) => {
    const button = IconButton(version);
    container.appendChild(button);
  });
  