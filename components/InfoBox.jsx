const InfoBox = ({
  heading,
  bgColor = 'bg-gray-100',
  textColor = 'text-gray-800',
  btnInfo,
  children,
}) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <a
        href={btnInfo.link}
        className={`${btnInfo.bgColor} inline-block px-4 py-2 text-white rounded-lg hover:opacity-80`}
      >
        {btnInfo.text}
      </a>
    </div>
  )
}

export default InfoBox
