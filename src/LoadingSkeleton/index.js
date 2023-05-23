import './LoadingSkeleton.css';

function LoadingSkeleton(){
  return (
    <article className='loader_container'>
      <div className="dot1"></div>
      <div className="dot2"></div>
      <div className="dot3"></div>
    </article>
  );
}

export {LoadingSkeleton};