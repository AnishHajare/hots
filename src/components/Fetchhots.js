import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

export class fetchhots extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            items: [],
            page: 1
        }
    }


    componentDidMount() {
        const url = "https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({items: data.items, loading: false})
             })
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.items) {
            return <div>questions not found</div>
        }

        return (
            <div>
                <InfiniteScroll dataLength={this.state.items.length} next={() => this.state.page + 1} hasMore={true} >
                {this.state.items.map(item => (
                    <div key={item.owner.user_id}>
                         <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-40-l w-50-m center">
                            <img src={item.owner.profile_image} className="db w-15 br2 br--top " alt=" of a kitten looking menacing." />
                            <div className="pa2 ph3-ns pb3-ns">
                                <div className="dt w-100 mt1">
                                <div className="dtc">
                                    <h1 className="mv0">{item.owner.display_name}</h1>
                                </div>
                                {/* <div className="dtc tr">
                                    <h2 className="f5 mv0">$1,000</h2>
                                </div> */}
                                </div>
                                <div className="dtc pt2">
                                    <a href={item.link} className="f5 lh-copy measure mt2 mid-gray pt-2" target="_blank ">
                                        <h1 className="f5 f4-ns mv0">{item.title}</h1>
                                    </a>
                                </div>
                                </div>
                        </article>
                    </div>
                ))}
                    </InfiniteScroll>
                </div>
        )
    }
}

export default fetchhots



// {/* <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
//   <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing.">
//   <div class="pa2 ph3-ns pb3-ns">
//     <div class="dt w-100 mt1">
//       <div class="dtc">
//         <h1 class="f5 f4-ns mv0">Cat</h1>
//       </div>
//       <div class="dtc tr">
//         <h2 class="f5 mv0">$1,000</h2>
//       </div>
//     </div>
//     <p class="f6 lh-copy measure mt2 mid-gray">
//       If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
//       and touch water with paw then recoil in horror.
//     </p>
//   </div>
// </article> */}

//  {/* <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw10 ">
//                         <img src={item.owner.profile_image} className="db w-100 br2 br--top"/>
//                         <div><h1 className="mv2">{item.owner.display_name}</h1></div>
//                         <div><h2>{item.title}</h2></div>
//                         <div className='link dim black '><a href={item.link} taget="_blank">{item.link}</a></div>
//                             <br></br>
//                         </article> */}