function insertarDatos()
	{
	var objeto_peticion=new XMLHttpRequest();
	objeto_peticion.onreadystatechange=function()
		{
			if (objeto_peticion.status==200 && objeto_peticion.readyState==4)
			{
			    pintarTabla(objeto_peticion.responseXML);
			}
		}
    objeto_peticion.open("GET", "camaras.xml");
    //objeto_peticion.setRequestHeader("Set-Cookie", "cross-site-cookie=whatever");
    //objeto_peticion.setRequestHeader("SameSite", "None");
        //("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
    objeto_peticion.send();
}

function pintarTabla(xml){

    var arr_lati=xml.getElementsByTagName("Latitud");
    var arr_longi=xml.getElementsByTagName("Longitud");
    var image =xml.getElementsByTagName("URL");

    var obj_tabla=document.createElement("table");
    for(i=0; i<arr_lati.length;i++ )
    {
        var objeto_fila=document.createElement("tr");
        var objeto_celda_lati=document.createElement("td");
        var objeto_celda_longi=document.createElement("td");
        var objeto_image=document.createElement("td");
        var imagesrc=document.createElement("img");

        var lati=arr_lati[i].childNodes[0].nodeValue;
        var longi=arr_longi[i].childNodes[0].nodeValue;
        var images=image[i].childNodes[0].nodeValue;

        objeto_celda_lati.innerHTML=lati;
        objeto_celda_longi.innerHTML=longi;
        imagesrc.src="https://"+images;

        objeto_fila.appendChild(objeto_celda_lati);
        objeto_fila.appendChild(objeto_celda_longi);
        objeto_fila.appendChild(objeto_image);
        objeto_image.appendChild(imagesrc);
        
        obj_tabla.appendChild(objeto_fila);

        document.getElementById("insertar_tabla").appendChild(obj_tabla);
}
    
}