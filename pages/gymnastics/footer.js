// creating our social media items
function SocialMediaItems(props){
  return(
    <div className="socialMedia">
      {
        props.items.map((item) => (
          <a href={item[1]} className={item[0].toLowerCase()}><img className={item[0].toLowerCase() + "i"}></img></a>
        ))
      }
    </div>
  )
}
// creating the text for footer
function TextToAdd(props){
  return(
    <p className={props.name}>{props.content}</p>
  )
}

// 123123123123123123123123123123
class FooterSection extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      icons: [["Instagram", "https://www.instagram.com/lipostyle/"],["Facebook","https://www.facebook.com/lipostyle.Profile/"],["Youtube", "https://www.youtube.com/channel/UCDZfJEphcLPb_5cloXoQxjg"]],
      cmpName: ["companyName", "Lipostyle Corporation"]
    }
  }

  render() {
    return (
      <>
        <div className="info">
          <TextToAdd name={"copyrigh"} content="&copy;"/>
          <TextToAdd name={this.state.cmpName[0]} content={this.state.cmpName[1]}/>
          <TextToAdd name="copyrigh" content="&copy;"/>
          <TextToAdd name="year" content="2022"/>
          <TextToAdd name="copyrigh" content="&copy;"/>
        </div>
        <SocialMediaItems items={this.state.icons} />
      </>
    )
  }
}
// here we render our footer to the dom
ReactDOM.render(
  <FooterSection />,
  document.querySelector("footer")
)
