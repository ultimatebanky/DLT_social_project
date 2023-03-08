// SIDEBAR//
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
let root = document.querySelector(':root'); //root is a psudo class
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// REMOVE ACTIVE CLASS FROM 
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        // FOR IT TO DISPLAY THE NOTIFICATION MESSAGE, A CONDITION WAS CREATED//
        if(item.id != 'notifications') {
            document.querySelector('.notification-popup').
            style.display = 'none';
        }else {
            document.querySelector('.notification-popup').
            style.display = 'block';
            
            //TO MARK THE NOTIFICATION COUNT AS READ
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
})

// ADDING A CLICK EVENT TO THE MESSAGES
messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'

    // TIME OUT WAS SET FOR THE BOX SHADOW TO BE CLEAR OFF 
    messagesNotifications.querySelector('.notification-count').style.display ='none'

    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// THEME CLICK BUTTON//
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThememodal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThememodal);
theme.addEventListener('click', openThemeModal);

// TO REMOVE ACTIVE CLASS FROM FONT SIZE
const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

// FONT SIZES
fontSize.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }

        // CHANGE FONT SIZE OF THE ROOT HTML ELEMENT//
        document.querySelector('html').style.fontSize = fontSize;
    })    
})

//  REMOVE ACTIVE CLASS FROM COLOR
const changeActiveColor = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
    colorPalette.forEach(color => {
        color.addEventListener('click',() => {
            changeActiveColor()
            let primary;
            if(color.classList.contains('color-1')){
                primary = '252';
            }else if(color.classList.contains('color-2')){
                primary = '52';
            }else if(color.classList.contains('color-3')) {
                primary = '352';
            }else if(color.classList.contains('color-4')) {
                primary = '152';
            }else if(color.classList.contains('color-5')) {
                primary = '202';
            }
            color.classList.add('active');
            root.style.setProperty('--primary-color-hue', primary);
        })
    })
    // THEME BACKGROUND//
    let lightColorLightness;
    let whiteColorLightness;
    let darkColorLightness;

    // CHANGE BACKGROUNG//
    const changeBG = ()=> {
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
    }

    Bg1.addEventListener('click', () => {
        console.log('its clicked');
        // ADD ACTIVE CLASS
        Bg1.classList.add('active');

        // REMOVE ACTIVE CLASS FROM OTHER 2 BG
        Bg2.classList.remove('active');
        Bg3.classList.remove('active');

        window.location.reload()
    })

    Bg2.addEventListener('click', () => {
        lightColorLightness = '15%';
        whiteColorLightness = '20%';
        darkColorLightness = '95%';

        // ADD ACTIVE CLASS
        Bg2.classList.add('active');

        // REMOVE ACTIVE CLASS FROM OTHERS
        Bg1.classList.remove('active');
        Bg3.classList.remove('active');

        changeBG();
    })

        Bg3.addEventListener('click', () => {
            lightColorLightness = '0%';
            whiteColorLightness = '10%';
            darkColorLightness = '95%';
            
        // ADD ACTIVE CLASS
            Bg3.classList.add('active');

        // REMOVE ACTIVE CLASS FROM OTHERS
            Bg1.classList.remove('active');
            Bg2.classList.remove('active');

            changeBG();
        })
        


    
   
