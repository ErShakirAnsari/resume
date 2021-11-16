const LocationSvg = ({ width, height }) => {
  return (
    <span className="align-text-bottom">
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
      </svg>
    </span>
  );
};

LocationSvg.defaultProps = {
  width: "18",
  height: 18,
};

export default LocationSvg;