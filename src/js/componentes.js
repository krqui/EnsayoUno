export function generarPoster(img,nombre,coleccion,fanpoints){
	img = "<img class='poster-img' src='https://res.cloudinary.com/dby5zzxin/image/upload/v1644257431/hbfk5z5hqjsdgac67osb.jpg'>";
	nombre = `<h2>${nombre}</h2>`;
	coleccion = `<h3>${coleccion}</h3>`;
	fanpoints = `<p>Fanpoints: <b>${fanpoints}</b></p>`;
	return [img,nombre,coleccion,fanpoints];
}