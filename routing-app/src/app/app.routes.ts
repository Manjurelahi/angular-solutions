import { ResolveFn, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { authGuard } from './auth.guard';

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

export const routes: Routes = [
	{ path: 'first-component', component: FirstComponent,
	children: [
		{
		  path: 'child-a', // child route path
		  title: resolvedChildATitle,
		  component: ChildAComponent, // child route component that the router renders
		  canActivate: [authGuard],
		},
		{
		  path: 'child-b',
		  component: ChildBComponent, // another child route component that the router renders
		},
	  ], 
	},
	{ path: 'second-component', component: SecondComponent },
	{ path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
];