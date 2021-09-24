var panorama1, panorama2, panorama3, viewer, container;
var welcome, link12, link21, link23, link32;
var coding, sensus, filling;
var indexing_vid;
var welcome_vid;

container = document.querySelector( '.frame' );

panorama1 = new PANOLENS.ImagePanorama('../images/room1.jpg' );
panorama2 = new PANOLENS.ImagePanorama('../images/room2.jpg');
panorama3 = new PANOLENS.ImagePanorama('../images/room3.jpg');

panorama1.link(panorama2, new THREE.Vector3(-1500, 0, 1500));
panorama2.link(panorama1, new THREE.Vector3(3000, 0, 700));
panorama2.link(panorama3, new THREE.Vector3(2500, 0, -900));
panorama3.link(panorama2, new THREE.Vector3(0,0,-2000))

//infospots
link12 = new PANOLENS.Infospot();
welcome_vid = new PANOLENS.Infospot(600, PANOLENS.DataImage.Info);
link21 = new PANOLENS.Infospot();
link23 = new PANOLENS.Infospot();
coding = new PANOLENS.Infospot();
sensus = new PANOLENS.Infospot();
filling = new PANOLENS.Infospot();
link32 = new PANOLENS.Infospot();
indexing_vid = new PANOLENS.Infospot(600, PANOLENS.DataImage.Info);

//room1
welcome_vid.position.set(-2000, -500, 6000);
welcome_vid.addHoverElement(document.getElementById('welVid'), 5);

link12.position.set(-3000, 500, 3000);
link12.addHoverText('to next room', 2);

//room2
link21.position.set(3000, 500, 700);
link21.addHoverText('to previous room');

link23.position.set(2500, 500, -900);
link23.addHoverText('to next room');

coding.position.set(0, 0, 6000);
coding.addHoverElement(document.getElementById('codingA'), 1);

sensus.position.set(-2500, 0, 3000);
sensus.addHoverElement(document.getElementById('sensusA'), 1);

filling.position.set(-500, 0, -4000);
filling.addHoverElement(document.getElementById('fillingA'), 1);

//room3
link32.position.set(0, 500, -2000);
link32.addHoverText('to previous room');

indexing_vid.position.set(5000, 0, 0);
indexing_vid.addHoverElement(document.getElementById('indVid'));

//add
panorama1.add(welcome);
panorama1.add(welcome_vid);
panorama1.add(link12);
panorama2.add(link21);
panorama2.add(link23);
panorama2.add(coding);
panorama2.add(sensus);
panorama2.add(filling);
panorama3.add(link32);
panorama3.add(indexing_vid);


//viewer
viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama1);
viewer.add( panorama2);
viewer.add( panorama3);


