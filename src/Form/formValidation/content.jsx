import React from "react";
import style from "./content.module.css";
import * as Validator from "validatorjs";

let ErrNm = ({ errors }) => {
  return (
    <ul className={`${style.errNotif}`}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};
let ErrEmm = ({ errors }) => {
  return (
    <ul className={`${style.errNotif}`}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};
let ErrPw = ({ errors }) => {
  return (
    <ul className={`${style.errNotif}`}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};
let ErrAdd = ({ errors }) => {
  return (
    <ul className={`${style.errNotif}`}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};
let ErrSww = ({ errors }) => {
  return (
    <ul className={`${style.errNotif}`}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};

export default class Content extends React.Component {
  state = {
    nama: "",
    email: "",
    password: "",
    alamat: "",
    siswa: "",
    ErrNama: "",
    ErrEmail: "",
    ErrPassword: "",
    ErrAlamat: "",
    ErrSiswa: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let { nama, email, password, alamat, siswa } = this.state;
    let data = { nama, email, password, alamat, siswa };
    let rules = {
      nama: "required",
      email: "required|email",
      password: "required|regex:^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$", //eslint-disable-line
      alamat: "required",
      siswa: "required",
    };
    let validation = new Validator(data, rules);

    Validator.useLang("id");
    validation.passes();

    alert(`    nama:${this.state.nama}
email: ${this.state.email}
password: ${this.state.password}
alamat: ${this.state.alamat}
siswa: ${this.state.siswa}
`);

    this.setState({
      ErrNama: validation.errors.get("nama"),
      ErrEmail: validation.errors.get("email"),
      ErrPassword: validation.errors.get("password"),
      ErrAlamat: validation.errors.get("alamat"),
      ErrSiswa: validation.errors.get("siswa"),
    });
  };
  render() {
    return (
      <div>
        <div className={`${style.fieldset}`}>
          <form onSubmit={this.handleSubmit} className={`${style.form}`} name="form">
            <label>
              Nama : <br />
              <input type="text" name="unama" onChange={(e) => this.setState({ nama: e.target.value })} {...this.state.value} />
              <br />
              {this.state.ErrNama && <ErrNm errors={this.state.ErrNama} />}
            </label>
            <label>Email :</label>
            <br />
            <input type="email" name="email" onChange={(e) => this.setState({ email: e.target.value })} />
            <br />
            {this.state.ErrEmail && <ErrEmm errors={this.state.ErrEmail} />}
            <label>
              Password :
              <br />
              <input type="password" name="password" onChange={(e) => this.setState({ password: e.target.value })} />
              <br />
              {this.state.ErrPassword && <ErrPw errors={this.state.ErrPassword} />}
            </label>
            <label className={`${style.fsSmall}`} id="wkwk">
              Minimal delapan karakter, setidaknya satu huruf besar, dan satu angka:
            </label>
            <br />
            <label>
              Alamat :
              <br />
              <textarea placeholder="alamat..." onChange={(e) => this.setState({ alamat: e.target.value })} />
              <br />
              {this.state.ErrAlamat && <ErrAdd errors={this.state.ErrAlamat} />}
            </label>
            <label>
              Siswa
              <input type="checkbox" name="siswa" value="YA" onChange={(e) => this.setState({ siswa: e.target.value })} />
              <br />
              {this.state.ErrSiswa && <ErrSww errors={this.state.ErrSiswa} />}
            </label>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
