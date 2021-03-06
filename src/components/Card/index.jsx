import React from 'react';

import { Container } from './styles';


export default function Card({ purpleCard }){
    return (
        <Container purpleCard={purpleCard}>
            <div className="card-wrapper" >
                <div>
                    <p className="title">
                        @MusicaParaCrianças
                    </p>
                    <p>
                        Crianças aprendem músicas de natal em escolas municipais de Itapetininga.  
                    </p>
                </div>
                {!purpleCard && <img src="image.jpg" />}
            </div>
        </Container>
    )
}