import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import { getOrphanages } from '../services/OrphanagesService';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import '../styles/pages/orphanages-map.css';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {

    const [orphanages, setOrpahnages] = useState<Orphanage[]>([]);

    useEffect(() => {
        ListOrphanages();
    }, []);

    const ListOrphanages = async () => {
        const res = await getOrphanages();
        console.log("LIST ORPHANAGES", res.data);
        setOrpahnages(res.data);
    }

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita ;)</p>
                </header>
                <footer>
                    <strong>Brasília</strong>
                    <strong>Distrito Federal</strong>
                </footer>
            </aside>
            <MapContainer
                center={[-15.8712465, -48.0704318]}
                zoom={15}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {
                    orphanages.map((orphanage) => {
                        return (
                            <Marker
                                key={orphanage.id}
                                icon={mapIcon}
                                position={[orphanage.latitude, orphanage.longitude]}
                            >
                                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                    {orphanage.name}
                                    <Link to={`/orphanages/${orphanage.id}`}>
                                        <FiArrowRight size={20} color="#FFF" />
                                    </Link>
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </MapContainer>
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;
