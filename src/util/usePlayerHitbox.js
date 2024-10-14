import usePlayerRealPosition from "./usePlayerRealPosition";


const usePlayerHitbox = ({ playerX, playerY, facing, size }) => {
    const { x , y } = usePlayerRealPosition({ playerX, playerY });

    let left, right, up, down;
    const offsetValue = size / 2;
    if (facing === 'left') {
        left = x - (offsetValue * 3);
        right = x + offsetValue;
    } else {
        left = x - offsetValue;
        right = x + (offsetValue * 3);
    }

    up = y - (offsetValue * 2);
    down = y + (offsetValue * 2);

    return ({
        left,
        right,
        up,
        down
    });
}

export default usePlayerHitbox;
