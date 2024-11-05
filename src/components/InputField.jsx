

export default function InputField({value, setTown, onKeyDown}) {


    return (
        <div className="inp-field">
        <input
          type="text"
          value={value}
          onChange={(e) => setTown(e.target.value)}
          placeholder="Enter location"
          onKeyDown={onKeyDown}
        />
      </div>

    )
}