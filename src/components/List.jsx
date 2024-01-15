export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li key={item.id}>
            <input type="checkbox" onChange={() => onToggleItem(item.id)} defaultChecked={item.checked} />
            <span 
            style={{
                textDecoration: item.checked 
                ? 'line-through' 
                : 'none'
            }}>   
            {item.quantity} {item.name}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
        </li> 
    );
}