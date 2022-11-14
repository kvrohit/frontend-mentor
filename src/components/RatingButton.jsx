export default function RatingButton({ id, name, value }) {
  return (
    <div class="group rounded-full h-10 w-10 relative bg-ratingDarkBlue">
      <input id={id} name={name} type="radio" value class="peer hidden" />
      <label
        for={id}
        class="cursor-pointer rounded-full text-xs group-hover:bg-ratingLightGray group-hover:text-white group-active:bg-ratingOrange group-active:text-white text-ratingLightGray absolute inset-0 flex items-center justify-center peer-checked:bg-ratingOrange peer-checked:text-white"
      >
        {value}
      </label>
    </div>
  );
}
