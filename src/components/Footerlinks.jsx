export default function FooterLinks({ title }) {
  console.log(title);

  return (
    <li className="nav-item ">
      <a className="nav-link " href="#">
        {title}
      </a>
    </li>
  );
}
