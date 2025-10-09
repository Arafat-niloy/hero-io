<div key={app.id}>
  <div>
    <img src={app.image} alt={app.title} />
  </div>
  <div>
    <h3>{app.title}</h3>
    <div>
      <p>{app.downloads?.toLocaleString() || 0}M</p>
      <p>{app.ratings}</p>
      <p>{app.sizeMb}</p>
    </div>
  </div>
  <div>
    <button
      onClick={() => handleUninstall(app.id, app.title)}
      className="text-white bg-[#00D390]"
    >
      Uninstall
    </button>
  </div>
</div>;
