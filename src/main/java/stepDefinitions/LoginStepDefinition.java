package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;



public class LoginStepDefinition {
	 WebDriver driver;
	 
	 @FindBy(xpath="//a[@title='Contacts']")
		WebElement contacts;
	
	
	@Given("^User is on login page$")
	public void user_is_on_login_page()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\AJBHARDW\\staging\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();	
		driver.get("https://classic.crmpro.com/login.cfm");
		driver.manage().timeouts().pageLoadTimeout(23, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(23, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}
	
	@When("^Title of the page is CRMPRO Log In Screen$")
	public void title_of_the_page_is_CRMPRO_Log_In_Screen()
	{
		String title=driver.getTitle();
		Assert.assertEquals("CRMPRO Log In Screen", title);
	}
	
	//Regular example
	// 1.st \"(.*)\"
	// 2nd \"([^\"]*)\"
	
	// in step definition file there will be no change, if we are using DDD, with or without Examples keyword
	// With example keyword

	@Then("^User enter \"(.*)\" and \"(.*)\"$")
	public  void user_enter_username_and_password(String username, String password)
	{
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	}
	
	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button()
	{
		driver.findElement(By.xpath("//input[@class='btn btn-small']")).click();
	}
	
	@Then("^User is on Homepage$")
	public void user_is_on_Homepage()
	{
		String homepage_title=driver.getTitle();
		 
		Assert.assertEquals("CRMPRO", homepage_title);
		
	}
	
	@Then("^User moves to NewContact Page$")
	public void user_moves_to_NewContact_Page()
	{
		PageFactory.initElements(driver, this);
		driver.switchTo().frame(1);
		Actions action = new Actions(driver);
		action.moveToElement(contacts).build().perform();
		driver.findElement(By.xpath("//a[contains(text(), 'New Contact')]")).click();
	}
	@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and_and(String firstname, String lastname, String company)
	{
		driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys(firstname);
		driver.findElement(By.xpath("//input[@name='surname']")).sendKeys(lastname);
		driver.findElement(By.xpath("//input[@name='client_lookup']")).sendKeys(company);
		driver.findElement(By.xpath("//input[@value='Save and Create Another (same company)']/preceding-sibling::input[@value='Save']")).click();
	}
	
	
	@Then("^Close the Browser$")
	public void close_the_Browser() throws InterruptedException
	{
		driver.quit();
	}

}
