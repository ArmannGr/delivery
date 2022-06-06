import React from 'react';
import PropTypes from 'prop-types';

function PageTitle(props) {
    return (
        <section className="breadcrumb-osahan pt-5 pb-5 bg-secondary position-relative text-center">
            <h1 className="text-white">{props.title}</h1>
            {props.subTitle ?
                <h6 className="text-white-50">{props.subTitle}</h6>
                : ""
            }
        </section>
    );
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
};
PageTitle.defaultProps = {
    subTitle: ''
}

export default PageTitle;