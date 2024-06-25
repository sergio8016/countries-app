# Countries Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3. It uses the free [Countries REST API](https://restcountries.com/) to explore new features of Angular versions 17 and 18.

## Running the Development Server

After cloning and downloading the project, run `ng serve -o` to start a development server. This command will automatically open the application in your default web browser.

## Exploring New Angular 17/18 Features

### New Lazy Loading Syntax

Angular 17/18 introduces a simplified syntax for lazy loading components. Here’s an example:

```typescript
{
  path: 'byCapital',
  loadComponent: () => import('./pages/by-capital-page/by-capital-page.component').then(m => m.ByCapitalPageComponent)
}
```

### `@for` Loop

Another new feature is the `@for` loop, which enhances template syntax for iterating over collections. Here’s how it can be used:

```html
@for (link of links; track link) {
  <li
    class="list-group-item"
    [routerLink]="link.url"
    routerLinkActive="active"
    [routerLinkActiveOptions]="{exact: true}"
   >
    {{ link.label }}
  </li>
}
```

### `@if` statement

Another new feature is the `@if` statement, which enhances template syntax for "showing/hiding" html content. Here’s how it can be used:

```html
@if (data.length > 0) {
<table class="table">
  <thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Flag</th>
    <th scope="col">Name</th>
    <th scope="col">Capital</th>
    <th scope="col">Population</th>
    <th scope="col">Link</th>
  </tr>
  </thead>
  <tbody>
  @for (country of data; track country; ) {
  <tr class="animate__animated animate__fadeIn">
    <td>{{ $index + 1 }}</td>
    <td>
      <img [src]="country.flags.svg" [alt]="country.name.common">
    </td>
    <td>{{ country.name.common }}</td>
    <td>{{ country.capital }}</td>
    <td>{{ country.population | number }}</td>
    <td>
      <a [routerLink]="['/byCountry', country.cca3]">See more</a>
    </td>
  </tr>
  }
  </tbody>
</table>
} @else {
<div class="alert alert-warning text-center">
  No results to show
</div>
}
```
## Some screenshots

`http://localhost:4200/byCountry` with "col" search

![image](https://github.com/sergio8016/countries-app/assets/32036415/0e88f225-c488-4896-9f73-c476d321c5c1)


`http://localhost:4200/byCountry/COL`

![image](https://github.com/sergio8016/countries-app/assets/32036415/6a229a4d-50cd-4692-a513-caebb149e0dc)


![img_1.png](img_1.png)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/countries-application.git
   cd countries-application
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   ng serve -o
   ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for details.

