import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";

import { getOrphanageById } from "../services/OrphanagesService";
import { useParams } from "react-router-dom";
import '../styles/pages/orphanage.css';

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string,
  instructions: string,
  opening_hours: string,
  open_on_weekend: string;
  images: Array<{
    url: string,
    id: number
  }>;
}

interface OrphanageParams {
  id: string;
}

export default function Orphanage() {
  const [orphanage, setOrpahnage] = useState<Orphanage>();
  const params = useParams<OrphanageParams>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    getOrpahnage();
  }, []);

  const getOrpahnage = async () => {
    const { id } = params;
    const res = await getOrphanageById(Number(id));
    setOrpahnage(res.data);
  }

  if (!orphanage) {
    return <p>Carregando ....</p>
  }

  return (
    <div id="page-orphanage">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

          <div className="images">
            {
              orphanage && orphanage.images.map((image, index) => {
                return (
                  <button 
                  className={ activeImageIndex === index ? "active" : ""}
                  type="button" 
                  key={image.id}
                  onClick={()=> {setActiveImageIndex(index)}}
                  >
                    <img src={image.url} alt={orphanage.name} />
                  </button>)
              })
            }
          </div>

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <MapContainer
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </MapContainer>

              <footer>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}`</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {
                orphanage.open_on_weekend ? <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div> : <div className="open-on-weekends">
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </div>
              }
            </div>

            {/* <PrimaryButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </PrimaryButton> */}
          </div>
        </div>
      </main>
    </div>
  );
}