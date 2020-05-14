import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                { 
                    title: 'hat',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                { 
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 1
                },
                { 
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 1
                },
                { 
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 1
                },
                { 
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 1
                },
               
            ]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem 
                        title={title} 
                        imageUrl={imageUrl}
                        size={size}
                        key={id}/>
                ))}
            </div>
        )
    }
}

export default Directory;