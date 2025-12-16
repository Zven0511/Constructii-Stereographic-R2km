ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([428120.323419, 477284.119859, 437037.149257, 480606.074582]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BufferStereographic2km_1 = new ol.format.GeoJSON();
var features_BufferStereographic2km_1 = format_BufferStereographic2km_1.readFeatures(json_BufferStereographic2km_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_BufferStereographic2km_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferStereographic2km_1.addFeatures(features_BufferStereographic2km_1);
var lyr_BufferStereographic2km_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferStereographic2km_1, 
                style: style_BufferStereographic2km_1,
                popuplayertitle: 'Buffer Stereographic 2 km',
                interactive: true,
                title: '<img src="styles/legend/BufferStereographic2km_1.png" /> Buffer Stereographic 2 km'
            });
var format_ConstructiiStereographicR2kmFINAL_2 = new ol.format.GeoJSON();
var features_ConstructiiStereographicR2kmFINAL_2 = format_ConstructiiStereographicR2kmFINAL_2.readFeatures(json_ConstructiiStereographicR2kmFINAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_ConstructiiStereographicR2kmFINAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConstructiiStereographicR2kmFINAL_2.addFeatures(features_ConstructiiStereographicR2kmFINAL_2);
var lyr_ConstructiiStereographicR2kmFINAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConstructiiStereographicR2kmFINAL_2, 
                style: style_ConstructiiStereographicR2kmFINAL_2,
                popuplayertitle: 'Constructii Stereographic R2km FINAL',
                interactive: true,
                title: '<img src="styles/legend/ConstructiiStereographicR2kmFINAL_2.png" /> Constructii Stereographic R2km FINAL'
            });
var format_CenterStereographic_3 = new ol.format.GeoJSON();
var features_CenterStereographic_3 = format_CenterStereographic_3.readFeatures(json_CenterStereographic_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CenterStereographic_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CenterStereographic_3.addFeatures(features_CenterStereographic_3);
var lyr_CenterStereographic_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CenterStereographic_3, 
                style: style_CenterStereographic_3,
                popuplayertitle: 'Center Stereographic',
                interactive: true,
                title: '<img src="styles/legend/CenterStereographic_3.png" /> Center Stereographic'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_BufferStereographic2km_1.setVisible(true);lyr_ConstructiiStereographicR2kmFINAL_2.setVisible(true);lyr_CenterStereographic_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_BufferStereographic2km_1,lyr_ConstructiiStereographicR2kmFINAL_2,lyr_CenterStereographic_3];
lyr_BufferStereographic2km_1.set('fieldAliases', {'id': 'id', });
lyr_ConstructiiStereographicR2kmFINAL_2.set('fieldAliases', {'id': 'id', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_CenterStereographic_3.set('fieldAliases', {'id': 'id', });
lyr_BufferStereographic2km_1.set('fieldImages', {'id': 'TextEdit', });
lyr_ConstructiiStereographicR2kmFINAL_2.set('fieldImages', {'id': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', });
lyr_CenterStereographic_3.set('fieldImages', {'id': 'TextEdit', });
lyr_BufferStereographic2km_1.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_ConstructiiStereographicR2kmFINAL_2.set('fieldLabels', {'id': 'inline label - visible with data', 'osm_id': 'inline label - visible with data', 'code': 'inline label - visible with data', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_CenterStereographic_3.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_CenterStereographic_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});