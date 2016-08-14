function Zho() {
  this.hostname = location.hostname;
  this.ahostname = this.hostname.split('.');
  this.env = this.ahostname[0]
}

Z = new Zho();
document.title = Z.env;
