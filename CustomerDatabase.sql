IF DB_ID('customersDB') IS NULL
	CREATE DATABASE customersDB;

GO

IF DB_ID('customersDB') IS NOT NULL
BEGIN
	CREATE TABLE customersDB.dbo.Customers(
		Id				INT			IDENTITY(1,1)	NOT NULL,
		AmountRequired	INT							Not NULL,
		Term			INT							Not NULL,
		Title			VARCHAR(20)					NOT NULL,
		FirstName		VARCHAR(255)				NOT NULL,
		LastName		VARCHAR(255)				NOT NULL,
		DateOfBirth		DATE						NOT NULL,
		Mobile			VARCHAR(50)					NOT NULL,
		Email			VARCHAR(255)					NOT NULL,
		PRIMARY KEY (Id)
		)
END
