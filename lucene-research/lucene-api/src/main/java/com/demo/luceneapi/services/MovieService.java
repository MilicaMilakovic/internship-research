package com.demo.luceneapi.services;

import com.demo.luceneapi.entities.MovieEntity;
import lombok.AllArgsConstructor;
import org.apache.lucene.search.Query;
import org.hibernate.search.jpa.FullTextEntityManager;
import org.hibernate.search.jpa.FullTextQuery;
import org.hibernate.search.jpa.Search;
import org.hibernate.search.query.dsl.QueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class MovieService {

    private EntityManager entityManager;

    public List<MovieEntity> searchMovies(String name) {
         FullTextEntityManager fullTextEntityManager
                = Search.getFullTextEntityManager(entityManager);

         QueryBuilder queryBuilder = fullTextEntityManager.getSearchFactory().
                                    buildQueryBuilder().forEntity(MovieEntity.class).get();

        Query query = queryBuilder.keyword().onField("title").matching(name).createQuery();

        FullTextQuery fullTextQuery = fullTextEntityManager.createFullTextQuery(query, MovieEntity.class);

        List<MovieEntity> movies = fullTextQuery.getResultList();

//        System.out.println("Movies : " + movies);
        return  movies;
    }

}
