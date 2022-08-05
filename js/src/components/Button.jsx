export default function Button({ onClick, group, index }) {
  return <div className="draw-button"><button onClick={() => onClick(group, index)}>Draw</button> </div> ;
}
