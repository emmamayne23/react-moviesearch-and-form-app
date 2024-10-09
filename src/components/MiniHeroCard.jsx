/* eslint-disable react/prop-types */

const MiniHeroCard = ({
    message = 'This is the Home Page',
    bg = 'bg-green-500'
}) => {
  return (
    <>
        <div className={`text-center py-2 ${bg} text-white my-1`}>
            <span>{message}</span>
        </div>
    </>
  )
}

export default MiniHeroCard