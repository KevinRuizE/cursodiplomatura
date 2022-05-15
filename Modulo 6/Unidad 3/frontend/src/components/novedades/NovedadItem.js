import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
            <h2 class='TNovedades'>{title}</h2>
            <h3 class='SNovedades'>{subtitle}</h3>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{__html: body }} />
            <hr />
        </div>
    );
}

export default NovedadItem;