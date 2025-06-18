var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_puntos_1 = new ol.format.GeoJSON();
var features_puntos_1 = format_puntos_1.readFeatures(json_puntos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntos_1.addFeatures(features_puntos_1);
var lyr_puntos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntos_1, 
                style: style_puntos_1,
                popuplayertitle: 'puntos',
                interactive: true,
    title: 'puntos<br />\
    <img src="styles/legend/puntos_1_0.png" /> salud<br />\
    <img src="styles/legend/puntos_1_1.png" /> educativo<br />\
    <img src="styles/legend/puntos_1_2.png" /> cultural<br />\
    <img src="styles/legend/puntos_1_3.png" /> religioso<br />\
    <img src="styles/legend/puntos_1_4.png" /> oficina publica<br />\
    <img src="styles/legend/puntos_1_5.png" /> estacionamiento<br />\
    <img src="styles/legend/puntos_1_6.png" /> mercado<br />\
    <img src="styles/legend/puntos_1_7.png" /> puesto callejero<br />\
    <img src="styles/legend/puntos_1_8.png" /> recreativo<br />\
    <img src="styles/legend/puntos_1_9.png" /> local comercial<br />\
    <img src="styles/legend/puntos_1_10.png" /> <br />' });
var format_ferias_2 = new ol.format.GeoJSON();
var features_ferias_2 = format_ferias_2.readFeatures(json_ferias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ferias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ferias_2.addFeatures(features_ferias_2);
var lyr_ferias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ferias_2, 
                style: style_ferias_2,
                popuplayertitle: 'ferias',
                interactive: true,
                title: '<img src="styles/legend/ferias_2.png" /> ferias'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_puntos_1.setVisible(true);lyr_ferias_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_puntos_1,lyr_ferias_2];
lyr_puntos_1.set('fieldAliases', {'capa': 'capa', 'geometria': 'geometria', 'calle': 'calle', 'altura': 'altura', 'categorias': 'categorias', 'rubro': 'rubro', 'obs': 'obs', 'estado': 'estado', 'recorrido': 'recorrido', 'equipo': 'equipo', 'localidad': 'localidad', 'país': 'país', 'dir': 'dir', 'latlong': 'latlong', });
lyr_ferias_2.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'dir': 'dir', });
lyr_puntos_1.set('fieldImages', {'capa': 'TextEdit', 'geometria': 'TextEdit', 'calle': 'TextEdit', 'altura': 'TextEdit', 'categorias': 'TextEdit', 'rubro': 'TextEdit', 'obs': 'TextEdit', 'estado': 'TextEdit', 'recorrido': 'TextEdit', 'equipo': 'TextEdit', 'localidad': 'TextEdit', 'país': 'TextEdit', 'dir': 'TextEdit', 'latlong': 'TextEdit', });
lyr_ferias_2.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'dir': 'TextEdit', });
lyr_puntos_1.set('fieldLabels', {'capa': 'inline label - visible with data', 'geometria': 'hidden field', 'calle': 'hidden field', 'altura': 'hidden field', 'categorias': 'hidden field', 'rubro': 'inline label - visible with data', 'obs': 'inline label - visible with data', 'estado': 'hidden field', 'recorrido': 'hidden field', 'equipo': 'hidden field', 'localidad': 'hidden field', 'país': 'hidden field', 'dir': 'hidden field', 'latlong': 'hidden field', });
lyr_ferias_2.set('fieldLabels', {'id': 'hidden field', 'nombre': 'inline label - visible with data', 'dir': 'hidden field', });
lyr_ferias_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});