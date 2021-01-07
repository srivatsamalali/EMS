package com.info;

public class AuthModel {
	
	
	 private int Id;
	private String Password;
	private boolean isAuth;

	public AuthModel(final int Id, final String Password, final boolean isAuth) {
		    this.Id = Id;
		    this.Password = Password;
		    this.isAuth = isAuth;
		  }

		  public AuthModel() {
		  }

		public int getId() {
			return Id;
		}

		public void setId(int id) {
			Id = id;
		}

		public String getPassword() {
			return Password;
		}

		public void setPassword(String password) {
			Password = password;
		}

		public boolean isAuth() {
			return isAuth;
		}

		public void setAuth(boolean isAuth) {
			this.isAuth = isAuth;
		}


}
