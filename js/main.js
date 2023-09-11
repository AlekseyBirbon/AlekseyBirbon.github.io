const panorama1 = new PANOLENS.ImagePanorama( 'img/1.jpg' );
const panorama2 = new PANOLENS.ImagePanorama( 'img/2.jpg' );
const panorama3 = new PANOLENS.ImagePanorama( 'img/3.jpg' );

const imgContainer = document.querySelector('.image-container');

const viewer = new PANOLENS.Viewer({
    container: imgContainer,
    autoRotate: false
});

panorama1.link(panorama2, new THREE.Vector3(100, -700, -1500));
panorama2.link(panorama1, new THREE.Vector3(800, -700, 0));
panorama2.link(panorama3, new THREE.Vector3(-800, -700, 0));
panorama3.link(panorama2, new THREE.Vector3(800, -700, 0));


var victoryYear = new PANOLENS.Infospot(200, 'img/4.png');
victoryYear.position.set(2000, 0, 200);
victoryYear.addEventListener('click', victoryYearInfo);

var vic = new PANOLENS.Infospot(200, 'img/4.png');
vic.position.set(2000, -300, 3000);
vic.addEventListener('click', victoryYearInfo);

var vic1 = new PANOLENS.Infospot(200, 'img/4.png');
vic1.position.set(2000, -300, -2300);
vic1.addEventListener('click', victoryYearInfo);

var vic2 = new PANOLENS.Infospot(200, 'img/4.png');
vic2.position.set(-2000, -500, 3400);
vic2.addEventListener('click', victoryYearInfo);

var vic3 = new PANOLENS.Infospot(200, 'img/4.png');
vic3.position.set(-2000, -300, -4600);
vic3.addEventListener('click', victoryYearInfo);

var vic4 = new PANOLENS.Infospot(200, 'img/4.png');
vic4.position.set(-2000, -300, -4600);
vic4.addEventListener('click', victoryYearInfo);

var vic5 = new PANOLENS.Infospot(200, 'img/4.png');
vic5.position.set(-2000, -300, -4600);
vic5.addEventListener('click', victoryYearInfo);

var vic6 = new PANOLENS.Infospot(200, 'img/4.png');
vic6.position.set(-2000, -300, -4600);
vic6.addEventListener('click', victoryYearInfo);

var vic7 = new PANOLENS.Infospot(200, 'img/4.png');
vic7.position.set(-2000, -300, -4600);
vic7.addEventListener('click', victoryYearInfo);

panorama1.add(victoryYear);
panorama1.add(vic);
panorama1.add(vic1);
panorama1.add(vic2);
panorama1.add(vic3);
panorama2.add(vic4);
panorama2.add(vic5);
panorama2.add(vic6);
panorama2.add(vic7);

var close = document.querySelector('.close');
close.addEventListener('click', disable)

function victoryYearInfo() {
    enable();

    var infoText = document.querySelector('.info__text');
    infoText.textContent = "В январе 1945 г. Красная Армия перешла в наступление по всему фронту. Война против Германии и ее союзников в Европе вступила в завершающий этап";
}

function enable() {
    viewer.disableControl();

    var info = document.querySelector('.info');
    info.style.display = "block";
}

function disable() {
    viewer.enableControl();

    var info = document.querySelector('.info');
    info.style.display = "none";
}


viewer.add(panorama1, panorama2, panorama3);